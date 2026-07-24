import Link from "next/link";
import DashboardIcon from "../components/Icons/DashboardIcons";
import ProductIcon from "../components/Icons/ProductIcon";
import InventoryIcon from "../components/Icons/InventoryIcon";
import PurchaseIcon from "../components/Icons/Purchase";
import QuicksalesIcon from "../components/Icons/QuicksalesIcon";
import SuppliersIcon from "../components/Icons/SuppliersIcon";
import CustomerIcon from "../components/Icons/CustomersIcon";
import ReportIcon from "../components/Icons/ReportsIcon";
import EmployeeIcon from "../components/Icons/EmployeeIcon";
import NotificationIcon from "../components/Icons/Notification";
import SubscrptionIcon from "../components/Icons/SubscriptionIcon";
import SettingIcon from "../components/Icons/SettingsIcon";


export default function ProfileCard() {

    const sidebarData = [
        { id: 1, icon: DashboardIcon, name: "Dashboard", path: "/dashboard" },
        { id: 2, icon: ProductIcon, name: "Product", path: "/dashboard/product" },
        { id: 3, icon: InventoryIcon, name: "Category", path: "/dashboard/Category" },
        { id: 4, icon: PurchaseIcon, name: "Purchase", path: "/dashboard/purchase" },
        { id: 5, icon: QuicksalesIcon, name: "Quick Sales", path: "/dashboard/quicksales" },
        { id: 6, icon: SuppliersIcon, name: "Suppliers", path: "/dashboard/suppliers" },
        { id: 7, icon: CustomerIcon, name: "Customers", path: "/dashboard/customers" },
        { id: 8, icon: ReportIcon, name: "Reports", path: "/dashboard/reports" },
        { id: 9, icon: EmployeeIcon, name: "Employees", path: "/dashboard/employees" },
        { id: 10, icon: NotificationIcon, name: "Notifcations", path: "/dashboard/notifications" },
        { id: 11, icon: SubscrptionIcon, name: "Subscription", path: "/dashboard/subscription" },
        { id: 12, icon: SettingIcon, name: "Settings", path: "/dashboard/settings" },
    ]
    return (
        <div className="bg-white text-black rounded shadow-lg">
            <div className="flex">
                <div>LOGO</div>
                <div><h3>Name</h3><p>slogan</p></div>
            </div>

            <div>
                {sidebarData.map((item) => {

                    const Icon = item.icon
                    return (
                        < Link href={item.path} key={item.id} >
                            <div className="flex hover:bg-primary hover:text-white hover:shadow-lg p-4 gap-2" >
                                <Icon className="h-5 w-5" />
                                <h3>{item.name}</h3>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div >
    )
}