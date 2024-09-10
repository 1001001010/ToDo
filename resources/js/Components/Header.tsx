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
                    <div className="relative flex-1 md:grow-0 flex justify-start">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="/"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    >
                                        <Home className="h-5 w-5" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    Главная
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div className="relative ml-auto flex-1 md:grow-0 flex justify-end">
                        {auth.user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full relative"
                                    >
                                        Профиль
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <Link
                                        href=""
                                        as="button"
                                        className="w-full"
                                    >
                                        <DropdownMenuItem>
                                            Профиль
                                        </DropdownMenuItem>
                                    </Link>
                                    <DropdownMenuSeparator />
                                    <Link
                                        href=""
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
