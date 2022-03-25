import {
  CompanyLogo,
  MainIcon,
  ProfileIconDiagrammIcon,
  GlobusIcon,
  GlobusIcon2,
  TelegramIcon,
  ServiceIcon,
  ProfileIcon,
  VectorIcon,
  City,
  Arrow,
  Group,
  Faoliyat,
  Yunalishlar,
  Xodimlar,
  Hudud,
  Reklamalar,
  AddItem,
  AddFile,
  AddFolder,
  CopyFolder,
  TransferFolder,
  EditFile,
  Antenna,
  AntennaReceive,
  DeleteItem,
  DeleteIcon,
  EditIcon,
  Circle,
  MacRed,
  CloseIconForTab,
  MacGreen,
  CloseIcon,
  UsersIcon,
  MacYellow,
  UploadFilePasport,
  UploadFileOilasi,
  Plus,
  Location,
  CloseIconSmall,
  DashIcon,
  FileBlueIcon,
  Checked,
} from "../../assets/icons/icons.js";
const SearchIcon = ({ icon }) => {
  switch (icon) {
    case "Yunalishlar": {
      return <Yunalishlar />;
    }
    case "Faoliyat": {
      return <Faoliyat />;
    }
    case "Xodimlar": {
      return <Xodimlar />;
    }
    case "Hudud": {
      return <Hudud />;
    }
    case "CompanyLogo": {
      return <CompanyLogo />;
    }
    case "MainIcon": {
      return <MainIcon />;
    }
    case "ProfileIconDiagrammIcon": {
      return <ProfileIconDiagrammIcon />;
    }

    case "GlobusIcon": {
      return <GlobusIcon />;
    }
    case "GlobusIcon2": {
      return <GlobusIcon2 />;
    }
    case "TelegramIcon": {
      return <TelegramIcon />;
    }
    case "ServiceIcon": {
      return <ServiceIcon />;
    }
    case "CloseIconSmall": {
      return <CloseIconSmall />;
    }
    case "AddItem": {
      return <AddItem />;
    }
    case "AddFile": {
      return <AddFile />;
    }

    case "VectorIcon": {
      return <VectorIcon />;
    }
    case "City": {
      return <City />;
    }
    case "Arrow": {
      return <Arrow />;
    }
    case "Group": {
      return <Group />;
    }
    case "Reklamalar": {
      return <Reklamalar />;
    }
    case "AddFolder": {
      return <AddFolder />;
    }
    case "CopyFolder": {
      return <CopyFolder />;
    }

    /* ------------------------------------ / ----------------------------------- */

    case "EditFile": {
      return <EditFile />;
    }
    case "Antenna": {
      return <Antenna />;
    }
    case "AntennaReceive": {
      return <AntennaReceive />;
    }
    case "DeleteItem": {
      return <DeleteItem />;
    }
    case "MacRed": {
      return <MacRed />;
    }
    case "MacGreen": {
      return <MacGreen />;
    }
    case "MacYellow": {
      return <MacYellow />;
    }

    /* ------------------------------------ / ----------------------------------- */

    case "DeleteIcon": {
      return <DeleteIcon />;
    }
    case "DashIcon": {
      return <DashIcon />;
    }
    case "UploadFilePasport": {
      return <UploadFilePasport />;
    }
    case "UploadFileOilasi": {
      return <UploadFileOilasi />;
    }
    case "Checked": {
      return <Checked />;
    }
    case "FileBlueIcon": {
      return <FileBlueIcon />;
    }
    case "Plus": {
      return <Plus />;
    }
    case "Location": {
      return <Location />;
    }
    case "EditIcon": {
      return <EditIcon />;
    }

    /* ------------------------------------ / ----------------------------------- */

    case "CloseIcon": {
      return <CloseIcon />;
    }
    case "Circle": {
      return <Circle />;
    }
    case "CloseIconForTab": {
      return <CloseIconForTab />;
    }
    case "UsersIcon": {
      return <UsersIcon />;
    }
    case "TransferFolder": {
      return <TransferFolder />;
    }
    case "ProfileIcon": {
      return <ProfileIcon />;
    }
    default: {
      return <AddFile />;
    }
  }
};

export default SearchIcon;
