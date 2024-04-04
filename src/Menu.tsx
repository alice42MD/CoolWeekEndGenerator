import { MailOutlined } from "@ant-design/icons"
import { Menu, MenuProps } from "antd"
import { MenuClickEventHandler } from "rc-menu/lib/interface"
import { StyledMenu } from "./styles"

const { SubMenu } = Menu

type MenuItem = Required<MenuProps>["items"][number]

function getItem(label: React.ReactNode, key: React.Key): MenuItem {
  return {
    label,
    key
  } as MenuItem
}

const MenuComponent = ({ handleClick }: { handleClick: (e: { key: string }) => void }) => {
  const items: MenuProps["items"] = [
    getItem("Itinary", "1"),
    { type: "divider" },
    getItem("Wheel", "2"),
    { type: "divider" },
    getItem("ChatGPT", "3")
  ]

  return <StyledMenu onClick={handleClick} items={items} />
}

export default MenuComponent
