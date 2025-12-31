import { CircleQuestionMark, Timer, CircleCheckBig, CircleOff, Circle } from "lucide-react";

export function StatusIcon({ status }: { status: string }) {
    let Icon;
    switch (status) {
        case "Backlog": Icon = CircleQuestionMark;
            break;
        case "In Progress": Icon = Timer;
            break;
        case "Done": Icon = CircleCheckBig;
            break;
        case "Canceled": Icon = CircleOff;
            break;
        default: Icon = Circle;
    }
    return <Icon className="size-4" />;
}