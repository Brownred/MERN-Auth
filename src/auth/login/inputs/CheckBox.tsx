import React from "react";
import {Checkbox} from "@nextui-org/react";

export default function CheckBox() {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div className="flex flex-col gap-2">
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
        Remember me 
      </Checkbox>
    </div>
  );
}
