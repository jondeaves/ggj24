import { FC } from "react";
import { Modal } from 'flowbite-react';
import React from "react";
import { Button } from "./button";
import { PoemStyle } from "../context";
import { POEM_STYLES } from "../constants/poem-styles";

type StyleModalProps = {
  isOpen: boolean;
  onSubmit: (style: PoemStyle) => void;
  onClose: () => void;
}

export const StyleModal: FC<StyleModalProps> = ({
  isOpen,
  onSubmit,
  onClose,
}) => {
  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header>
        What kind of poem will you write?
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col gap-8">
          {POEM_STYLES.map(style => (
            <div key={style.ident} className="flex flex-col gap-2">
              <h3 className="flex justify-between">
                {style.title}

                <Button size="tiny" onClick={() => onSubmit(style.ident)} className="mt-1" disabled={style.disabled} disabledTooltip="Coming soon">
                  Choose this style
                </Button>
              </h3>
              <p className="text-base leading-relaxed">
                {style.description}
              </p>
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
}