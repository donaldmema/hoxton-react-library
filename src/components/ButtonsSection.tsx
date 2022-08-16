import { Button } from "./Button";

export function ButtonsSection() {
  return (
    <div>
      <Button
        variant="destructive"
        onClick={() =>
          alert(`Some sort of warning:
                                
          
                                Be careful of the VOID`)
        }
      >
        Destructive
      </Button>
      <br />

      <Button variant="primary">Primary</Button>

      <Button variant="secondary">Secondary</Button>

      <Button backgroundColor="grey" color="white">
        Specific
      </Button>
    </div>
  );
}
