import InputUiType from "./InputUiType";
import SelectUiType from "./SelectUiType";
import SwitchUiType from "./SwitchUiType";

const IgnoreUiType = (props: { data: any; radioButtonInput: string }) => {
  return (
    <div>
      {props.data.subParameters.map((subParameter: any, index: any) => (
        <>
          {subParameter.uiType === "Select" && (
              <SelectUiType data={subParameter} />
              )}
          {subParameter.uiType === "Input" && (
              <InputUiType data={subParameter} />
              )}
          {subParameter.uiType === "Switch" && (
              <SwitchUiType data={subParameter} />
              )}
        </>
      ))}
    </div>
  );
};

export default IgnoreUiType;

// {
//   "sort": 10001,
//   "label": "Naples Style Pizza",
//   "description": "",
//   "validate": {
//     "required": true,
//     "immutable": false
//   },
//   "jsonKey": "Naples",
//   "uiType": "Ignore",
//   "icon": "",
//   "level": 1,
//   "placeholder": "",
//   "conditions": [
//     {
//       "jsonKey": "pizza_type.type",
//       "op": "==",
//       "value": "naples",
//       "action": "enable"
//     }
//   ],
//   "subParameters": [
//     {
//       "sort": 10000,
//       "label": "Slices",
//       "description": "",
//       "validate": {
//         "required": true,
//         "options": [
//           {
//             "label": "1",
//             "value": "1",
//             "description": "",
//             "icon": ""
//           },
//           {
//             "label": "2",
//             "value": "2",
//             "description": "",
//             "icon": ""
//           },
//           {
//             "label": "3",
//             "value": "3",
//             "description": "",
//             "icon": ""
//           },
//           {
//             "label": "4",
//             "value": "4",
//             "description": "",
//             "icon": ""
//           },
//           {
//             "label": "5",
//             "value": "5",
//             "description": "",
//             "icon": ""
//           }
//         ],
//         "defaultValue": "1",
//         "immutable": false
//       },
//       "jsonKey": "slices",
//       "uiType": "Select",
//       "icon": "",
//       "level": 2,
//       "placeholder": ""
//     },
//     {
//       "sort": 10001,
//       "label": "Type",
//       "description": "",
//       "validate": {
//         "required": true,
//         "pattern": "naples",
//         "immutable": false
//       },
//       "jsonKey": "type",
//       "uiType": "Input",
//       "icon": "",
//       "level": 2,
//       "placeholder": "",
//       "disable": true
//     }
//   ]
// },
