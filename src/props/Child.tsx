// interface ChildProps {Whatever you want to pass in here}
// check out the interface in the parent component
// to see what props are being passed in

interface ChildProps {
    color: string;
};

export const Child = ({color}: ChildProps) => {
    return <div>{color}</div>;
}