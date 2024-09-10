import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Header from "@/Components/Header";

export default function Welcome({ auth }: PageProps<{}>) {
    return (
        <>
            <Header auth={auth} />
            <div></div>
        </>
    );
}
