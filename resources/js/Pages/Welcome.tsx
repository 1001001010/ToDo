import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Header from "@/Components/Header";
import Search from "@/Components/Search";
import DoList from "@/Components/DoList";

export default function Welcome({ auth }: PageProps<{}>) {
    return (
        <>
            <Header auth={auth} />
            <div className="p-4 flex gap-4">
                <div className="border rounded-lg w-1/5 flex flex-col gap-4 p-4">
                    <p>Фильтрация</p>
                    <Search auth={auth} />
                </div>
                <div className="w-full border rounded-lg p-4 gap-4 flex flex-col justify-center">
                    <p>Список дел</p>
                    <DoList auth={auth} />
                </div>
            </div>
        </>
    );
}
