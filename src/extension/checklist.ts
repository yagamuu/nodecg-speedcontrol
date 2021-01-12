import { isEqual } from 'lodash';
import { processAck } from './util/helpers'; // eslint-disable-line object-curly-newline, max-len
import { get } from './util/nodecg';
import { CheckList } from '../../types';

let checklistNum = 0;
const defaultChecklist = [
  { name: `${checklistNum += 1}. 走者とゲームの情報を確認`, complete: false },
  { name: `${checklistNum += 1}. 正しいレイアウトを選択`, complete: false },
  { name: `${checklistNum += 1}. 走者とゲーム画面が一致`, complete: false },
  { name: `${checklistNum += 1}. クロップをリセット`, complete: false },
  { name: `${checklistNum += 1}. ゲーム画面をクロップ`, complete: false },
  { name: `${checklistNum += 1}. Steam通知ポップアップOFF`, complete: false },
  { name: `${checklistNum += 1}. 音声の準備ができた`, complete: false },
];

const nodecg = get();
const checklistRep = nodecg.Replicant<CheckList>('checklist', {
  defaultValue: defaultChecklist,
});

if (checklistRep.value) {
  const currentNameList = checklistRep.value.map((item) => item.name);
  const defaultNameList = defaultChecklist.map((item) => item.name);
  if (!isEqual(currentNameList, defaultNameList)) {
    if (checklistRep.value.every((item) => item.complete)) {
      checklistRep.value = defaultChecklist.map((item) => ({
        name: item.name,
        complete: true,
      }));
    } else {
      checklistRep.value = defaultChecklist;
    }
  }
}

const toggleCheckbox = async (payload: {name: string; checked: boolean}): Promise<void> => {
  if (!checklistRep.value) {
    throw new Error('Cannot read replicant of checklist.');
  }
  const item = checklistRep.value.find(
    (replicant) => replicant.name === payload.name,
  );
  if (item) {
    item.complete = payload.checked;
  }
};

const resetChecklist = async (): Promise<void> => {
  if (!checklistRep.value) {
    throw new Error('Cannot read replicant of checklist.');
  }

  checklistRep.value.forEach((item, index) => { checklistRep.value[index].complete = false; });
};

nodecg.listenFor('toggleCheckbox', (payload, ack) => {
  toggleCheckbox(payload)
    .then((checklist) => processAck(ack, null, checklist))
    .catch((err) => processAck(ack, err));
});

nodecg.listenFor('resetChecklist', (data, ack) => {
  resetChecklist()
    .then(() => processAck(ack, null))
    .catch((err) => processAck(ack, err));
});
