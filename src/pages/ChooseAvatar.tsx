import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './index.css';

export function ChooseAvatar() {  
  return (
    <section>
      <h1 className="">Choose Avatar</h1>

      {/* AVATAR RESULTADO DO SELECT DAS OPCOES DE NOME */}

      {/* SELECT DAS OPCOES DE NOME */}
      <Select.Root>
        <Select.Trigger className="SelectTrigger" aria-label='Avatar'>
          <Select.Value placeholder='Escolha Alguem' />

          <Select.Icon className="SelectIcon">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="SelectContent">
            <Select.ScrollUpButton className="SelectScrollButton">
              <ChevronUpIcon />
            </Select.ScrollUpButton>

            <Select.Viewport className="SelectViewport">
              <Select.Group>
                <SelectItem value='Renzão' />

                <SelectItem value='Enzo' />
              </Select.Group>
            </Select.Viewport>

            <Select.ScrollDownButton className="SelectScrollButton">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      {/* BOTAO DE CONFIRMAR AVATAR */}
    </section>
  );
}

const SelectItem = ({ value }: { value: string }) => {
  return (
    <Select.Item className='SelectItem' value={value.toLowerCase()}>
      <Select.ItemText>{value}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

SelectItem.displayName = 'SelectItem';