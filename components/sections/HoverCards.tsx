import React from "react";
import { IconType } from "react-icons";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";

const HoverDevCards = () => {
  return (
    <div className="p-7">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">

        <Card title="Account" subtitle="Manage profile" href="#" Icon={FiUser} />
        <Card title="Email" subtitle="Manage email" href="#" Icon={FiMail} />
        <Card title="Team" subtitle="Manage team" href="#" Icon={FiUsers} />
        <Card title="Billing" subtitle="Manage cards" href="#" Icon={FiCreditCard} />

      </div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
  href: string;
}

const Card = ({ title, subtitle, Icon, href }: CardType) => {
  return (
    <a
      href={href}
      className="w-full min-w-[300px] p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-dodgerblue-400 to-dodgerblue-800 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-dodgerblue-400 group-hover:text-dodgerblue-300 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-primary hover:text-dodgerblue-50 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-zinc-900 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-zinc-900 group-hover:text-dodgerblue-50 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;