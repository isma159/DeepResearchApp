import {Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarProvider} from "./ui/sidebar.tsx";

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>

            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>

                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}

export function Topbar() {
    return (
        <aside className="flex w-full h-17.5">

        </aside>
    );
}