import "./dropdown.css";

type DropDownType = {
  logout: () => void;
};
export default function Dropdown({ logout }: DropDownType) {
  return (
    <div className="dropdown">
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
