import {
  AppstoreOutlined,
  SettingOutlined,
  FileOutlined,
  HomeOutlined,
} from "@ant-design/icons";
const menuList = [
  {
    key: "/home",
    icon: <HomeOutlined />,
    title: "首页",
  },
  {
    key: "product",
    icon: <AppstoreOutlined />,
    title: "商品",
    children: [
      {
        key: "/product",
        icon: <AppstoreOutlined />,
        title: "商品管理",
      },
      {
        key: "/category",
        icon: <AppstoreOutlined />,
        title: "分类管理",
      },
    ],
  },
  {
    key: "/user",
    icon: <SettingOutlined />,
    title: "用户管理",
  },
  {
    key: "/role",
    icon: <SettingOutlined />,
    title: "角色管理",
  },
  {
    key: "/chart",
    icon: <FileOutlined />,
    title: "图形图表",
    children: [
      {
        key: "/bar",
        icon: <FileOutlined />,
        title: "柱形图",
      },
      {
        key: "/line",
        icon: <FileOutlined />,
        title: "折线图",
      },
      {
        key: "/pie",
        icon: <FileOutlined />,
        title: "饼状图",
      },
    ],
  },
];
export default menuList;
