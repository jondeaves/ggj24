import { FC, useState } from "react";
import { Modal } from 'flowbite-react';
import React from "react";
import Image from "next/image";

import { LinkAsButton } from "./link-as-button";
import { Button } from "./button";

export const Info: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="absolute right-4 top-4 flex flex-row">
        <LinkAsButton href="/" size="small" force className="rounded-r-none border-r border-r-bg-color">Reset</LinkAsButton>
        <Button size="small" className="rounded-l-none" onClick={() => setIsOpen(true)}>Info</Button>
      </div>

      <Modal show={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>Poetry Chain</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-8 items-end">
            <div className="space-y-6">
              <p className="text-base leading-relaxed">
                Poetry Chain is a game about coming together for communal hilarity.
                Limericks, haikus, it&apos;s all on the table!
              </p>

              <p className="text-base leading-relaxed">
                It was made as part of the{' '}
                <a href="https://globalgamejam.org/" rel="external" target="_blank">Global Game Jam 2024</a> and
                was brought to life by a small team of strangers become friends at
                the <a href="https://globalgamejam.org/jam-sites/2024/mohawk-college-fennell-campus" rel="external" target="_blank">Mohawk College Fennell Campus</a> in Hamilton, Ontario.
              </p>

              <p className="text-base leading-relaxed">
                Unleash your inner poet. Write the most absurd poem solo or
                locally with friends!
              </p>
            </div>

            <Image src="/logo.webp" alt="A hand holding a skull" width={335} height={335} className="w-24 h-24 rounded-full animate-reverse-slow-spin" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}