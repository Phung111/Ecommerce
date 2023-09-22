import diamond from "assets/images/diamond_member.png";
import autied from "assets/images/audited_supplier.png";
import factory from "assets/images/factory.svg";
import groupPeople from "assets/images/group_people.svg";
import ButtonChat from "features/components/Button/ButtonChat";

export default function ChatWithSupplier() {
  return (
    <>
      <div className="flex flex-col justify-between gap-4">
        <div className="flex gap-4 py-1">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src={diamond} alt="diamond" />
              <p>Diamond Member</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={autied} alt="autied" />
              <p>Audited Supplier</p>
            </div>
            <p>
              Rating: <span className="font-semibold text-blue">5.0/5</span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-primary">Since 2010</p>
            <div className="flex items-center gap-2">
              <img src={factory} alt="factory" />
              <p>2500m^2</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={groupPeople} alt="groupPeople" />
              <p>21 Staffs</p>
            </div>
          </div>
        </div>
        <ButtonChat />
      </div>
    </>
  );
}
