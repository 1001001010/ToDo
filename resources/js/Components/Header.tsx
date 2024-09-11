import { PageProps } from "../types";
import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { FormEventHandler } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import {
    Home,
    LineChart,
    Package2,
    PanelLeft,
    Search,
    PencilRuler,
    Settings,
    Users2,
    MoonStar,
    SunMedium,
    GitCompareArrows,
    ListFilter,
    Bookmark,
} from "lucide-react";

export default function Header({ auth }: PageProps<{}>) {
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        route("logout");
    };

    return (
        <div className="flex w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <div className="relative flex-1 md:grow-0 flex justify-start"></div>
                    <div className="relative ml-auto flex-1 md:grow-0 flex justify-end">
                        {auth.user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className=" relative"
                                    >
                                        Профиль
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <Link
                                        href={route("profile.edit")}
                                        as="button"
                                        className="w-full"
                                    >
                                        <DropdownMenuItem>
                                            Настройки
                                        </DropdownMenuItem>
                                    </Link>
                                    <DropdownMenuSeparator />
                                    <form onSubmit={submit}>
                                        <Link
                                            href=""
                                            method="post"
                                            as="button"
                                            className="w-full"
                                        >
                                            <DropdownMenuItem>
                                                Выход
                                            </DropdownMenuItem>
                                        </Link>
                                    </form>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Button asChild>
                                <Link href={route("login")}>Вход</Link>
                            </Button>
                        )}
                    </div>
                </header>
            </div>
        </div>
    );
}
