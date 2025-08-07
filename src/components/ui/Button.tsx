


export interface ButtonProps {
   variant: "primary"| "secondary";
   size: "sm" | "md" | "lg";
   text: string;
   starticon?: string;
   endIcon?: any;
   onClick: () => void;

}

export const Button = (props: ButtonProps) => {

 return  <button></button>;
}
<Button variant = "primary" size="md" onClick={() => {}} text={"asd"} ></Button>