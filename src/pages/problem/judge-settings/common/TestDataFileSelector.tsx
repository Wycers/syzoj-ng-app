import React from "react";
import { Dropdown, Form, Icon, FormSelectProps, DropdownProps, SemanticICONS, Popup } from "semantic-ui-react";

import style from "./TestDataFileSelector.module.less";

import { useLocalizer } from "@/utils/hooks";
import getFileIcon from "@/utils/getFileIcon";
import formatFileSize from "@/utils/formatFileSize";
import { EmojiRenderer } from "@/components/EmojiRenderer";

interface TestDataFileSelectorProps {
  type: "FormSelect" | "ItemSearchDropdown";
  className?: string;
  iconInputOrOutput?: SemanticICONS;
  label?: FormSelectProps["label"];
  testData: ApiTypes.ProblemFileDto[];
  optional?: boolean;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const TestDataFileSelector: React.FC<TestDataFileSelectorProps> = props => {
  const _ = useLocalizer("problem_judge_settings");

  const uiProps: FormSelectProps | DropdownProps = {
    className:
      style.fileSelect +
      " " +
      (props.type === "ItemSearchDropdown" ? style.itemSearchDropdown : style.formSelect) +
      (props.className ? " " + props.className : ""),
    label: props.label,
    text:
      props.value && !props.testData.some(file => file.filename === props.value)
        ? ((
            <>
              {props.iconInputOrOutput && <Icon className={style.iconInputOrOutput} name={props.iconInputOrOutput} />}
              <Popup
                trigger={<Icon name="warning sign" className={style.iconFile} />}
                content={_(".file_selector.file_not_found_warning")}
                position="top center"
              />
              <EmojiRenderer>
                <span>{props.value}</span>
              </EmojiRenderer>
            </>
          ) as any)
        : undefined,
    placeholder: props.placeholder,
    value: props.value,
    options: [
      ...(props.optional
        ? [
            {
              key: null,
              value: null,
              text: (
                <>
                  {props.iconInputOrOutput && (
                    <Icon className={style.iconInputOrOutput + " " + style.invisible} name={props.iconInputOrOutput} />
                  )}
                  <Icon name="file code outline" className={style.iconFile + " " + style.invisible} />
                  <div className={style.filename}>{"\u200E" + _(".file_selector.empty")}</div>
                </>
              )
            }
          ]
        : []),
      ...props.testData.map(file => ({
        key: file.filename,
        value: file.filename,
        text: (
          <>
            {props.iconInputOrOutput && <Icon className={style.iconInputOrOutput} name={props.iconInputOrOutput} />}
            <Icon name={getFileIcon(file.filename)} className={style.iconFile} />
            <EmojiRenderer>
              <div className={style.filename}>{"\u200E" + file.filename}</div>
            </EmojiRenderer>
            <div className={style.fileSize}>{formatFileSize(file.size, 1)}</div>
          </>
        )
      }))
    ],
    onChange: (e, { value }) => props.onChange(value as string)
  };

  return props.type === "ItemSearchDropdown" ? (
    <Dropdown item selection search noResultsMessage={_(".file_selector.no_matching_files")} {...uiProps} />
  ) : (
    <Form.Select open={props.testData.length === 0 ? false : undefined} {...(uiProps as FormSelectProps)} />
  );
};

export default TestDataFileSelector;
