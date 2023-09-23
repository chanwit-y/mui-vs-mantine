import { ListDemo } from "@/components/List";
import { MantineProvider} from "@mantine/core";

export default function Home() {
  return (
    <>
      <MantineProvider defaultColorScheme='auto'>
        <ListDemo />
      </MantineProvider>
    </>
  )
}
