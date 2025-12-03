import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { AlertCircle, CheckCircle, Clock, List, Plus } from 'lucide-react';

interface Stats {
    totalLists: number;
    totalTasks: number;
    completedTasks: number;
    pendingTasks: number;
}

interface Props {
    stats?: Stats;
    lists?: any[];
    tasks?: any[];
    flash?: {
        success?: string;
        error?: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({
    stats = {
        totalLists: 0,
        totalTasks: 0,
        completedTasks: 0,
        pendingTasks: 0,
    },
    lists = [],
    tasks = [],
    flash,
}: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl bg-gradient-to-br from-background to-muted/20 p-6">
                {/* Flash Messages */}
                {flash?.success && (
                    <div className="rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-green-500">
                        {flash.success}
                    </div>
                )}
                {flash?.error && (
                    <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-500">
                        {flash.error}
                    </div>
                )}

                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">
                            Dashboard
                        </h1>
                        <p className="mt-1 text-muted-foreground">
                            Welcome back! Here's your overview
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Link href={route('lists.index')}>
                            <Button className="bg-primary text-black shadow-lg hover:bg-primary/90">
                                <List className="mr-2 h-4 w-4" />
                                View Lists
                            </Button>
                        </Link>
                        <Link href={route('tasks.index')}>
                            <Button className="bg-primary text-black shadow-lg hover:bg-primary/90">
                                <CheckCircle className="mr-2 h-4 w-4" />
                                View Tasks
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* Total Lists Card */}
                    <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-blue-600/10">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-blue-500">
                                Total Lists
                            </CardTitle>
                            <List className="h-4 w-4 text-blue-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-500">
                                {stats.totalLists}
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground">
                                Your task lists
                            </p>
                        </CardContent>
                    </Card>

                    {/* Total Tasks Card */}
                    <Card className="border-green-500/20 bg-gradient-to-br from-green-500/10 to-green-600/10">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-green-500">
                                Total Tasks
                            </CardTitle>
                            <CheckCircle className="h-4 w-4 text-green-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-500">
                                {stats.totalTasks}
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground">
                                All your tasks
                            </p>
                        </CardContent>
                    </Card>

                    {/* Pending Tasks Card */}
                    <Card className="border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-yellow-500">
                                Pending Tasks
                            </CardTitle>
                            <Clock className="h-4 w-4 text-yellow-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-yellow-500">
                                {stats.pendingTasks}
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground">
                                Tasks to completed
                            </p>
                        </CardContent>
                    </Card>

                    {/* Completed Tasks Card */}
                    <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-purple-600/10">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-purple-500">
                                Completed Tasks
                            </CardTitle>
                            <AlertCircle className="h-4 w-4 text-purple-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-purple-500">
                                {stats.completedTasks}
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground">
                                Tasks completed
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Bottom Section */}
                <div className="grid gap-4 md:grid-cols-2">
                    {/* Quick Actions Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">
                                Quick Actions
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Link href={route('lists.index')}>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start hover:bg-accent"
                                >
                                    <List className="mr-2 h-4 w-4" />
                                    View All Lists
                                </Button>
                            </Link>
                            <Link href={route('tasks.index')}>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start hover:bg-accent"
                                >
                                    <CheckCircle className="mr-2 h-4 w-4" />
                                    View All Tasks
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Recent Activity Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">
                                Recent Activity
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {tasks.length > 0 || lists.length > 0 ? (
                                <div className="space-y-3">
                                    {tasks
                                        .slice(0, 3)
                                        .map((task: any, index: number) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="rounded-full bg-muted p-2">
                                                    {task.is_completed ? (
                                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                                    ) : (
                                                        <Clock className="h-4 w-4 text-yellow-500" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">
                                                        {task.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        {task.is_completed
                                                            ? 'Completed'
                                                            : 'Pending'}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ) : (
                                <div className="flex items-start gap-3">
                                    <div className="rounded-full bg-muted p-2">
                                        <Plus className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">
                                            Welcome to Task Manager
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Get started by creating your first
                                            list or Task
                                        </p>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
