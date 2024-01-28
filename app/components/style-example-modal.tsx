import { FC } from "react";
import { Modal } from 'flowbite-react';
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { Button } from "./button";
import { PoemStyle } from "../context";
import { POEM_STYLES } from "../constants/poem-styles";
import { StylishPoem } from "./poem/stylish-poem";

type StyleModalProps = {
  isOpen: boolean;
  onClose: () => void;
  poemStyle: PoemStyle;
}

export const StyleExampleModal: FC<StyleModalProps> = ({
  isOpen,
  onClose,
  poemStyle,
}) => {
  const activePoemStyle = POEM_STYLES.find(style => style.ident === poemStyle)
  if (!activePoemStyle) {
    return null;
  }

  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Body>
        <div className="flex flex-col py-6 relative">
          <Button theme="bare" className="absolute top-0 right-0 h-auto" onClick={onClose}>
            <XMarkIcon className="h-6 w-6" />
          </Button>

          {activePoemStyle.example && (
            <StylishPoem text={activePoemStyle.example} />
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}