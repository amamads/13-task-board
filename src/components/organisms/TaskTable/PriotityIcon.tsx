import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";

export function PriorityIcon({ priority }: { priority: string }) {
    let Icon;
    switch (priority) {
        case "Low": Icon = ArrowDown;
            break;
        case "Medium": Icon = ArrowRight;
            break;
        default: Icon = ArrowUp;
    }
    return <Icon className="size-4" />;
}