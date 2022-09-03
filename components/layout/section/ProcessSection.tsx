import clsx from "clsx";
import React, { FunctionComponent, useState } from "react";

import AltificoLogo from "../../../assets/svg/logo/128x-circle.svg";
import Blonk from "../../../assets/svg/logo/Blonk.svg";

import SectionHeader from "./SectionHeader";

interface ProcessItemProps {
  icon: FunctionComponent<any>;
  label: string;
}

const ProcessItem = ({ icon: Icon, label }: ProcessItemProps) => {
  return (
    <div className="rounded-lg bg-neutral-800 p-6 transition-transform sm:hover:scale-[102%]">
      <Icon className="mr-6 inline h-6 w-6 text-white" />
      <span className="font-bold text-white">{label}</span>
    </div>
  );
};

interface TabProps {
  icon: FunctionComponent<any>;
  label: string;
  selected?: boolean;

  onSelect(): void;
}

const Tab = ({ icon: Icon, label, selected, onSelect }: TabProps) => {
  return (
    <button
      type="button"
      className="flex flex-col items-center"
      onClick={onSelect}
    >
      <Icon
        className={clsx(
          "mb-3 h-8 w-8 text-gray-400 transition-colors md:h-12 md:w-12 ",
          selected && "text-indigo-400"
        )}
      />
      <span
        className={clsx(
          "text-xs font-bold text-gray-400 transition-colors md:text-sm",
          selected && "text-indigo-400"
        )}
      >
        {label}
      </span>
    </button>
  );
};

export default function ProcessSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="container m-auto px-4">
      <SectionHeader
        title="Who Am I?"
        subtitle="Just Read The Text."
      />
      <div className="flex flex-col">
        <div className="mt-12 flex flex-row gap-8 sm:gap-10 md:flex-1">
          <Tab
            icon={Blonk}
            label="Please Do Just Take A Moment To Read!"
            selected={selectedTab === 0}
            onSelect={() => setSelectedTab(0)}
          />
        </div>
        <div className="mt-8 grid h-min gap-4 sm:grid-cols-2 md:flex-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
          {selectedTab === 0 && (
            <>
              <ProcessItem icon={AltificoLogo} label="Altific Is I" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
