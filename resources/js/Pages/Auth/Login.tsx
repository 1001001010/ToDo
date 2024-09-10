import { FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Link, useForm } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <GuestLayout>
                <form onSubmit={submit}>
                    <div>
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="password">Пароль</Label>

                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <Link
                            href={route("register")}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Регистрация
                        </Link>
                        <Button>Войти</Button>
                    </div>
                </form>
            </GuestLayout>
        </>
    );
}
