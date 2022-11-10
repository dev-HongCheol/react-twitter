import React from 'react';

interface Props {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
}

function SidebarRow({ Icon, title }: Props) {
  return (
    <div>
      <Icon />
      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
