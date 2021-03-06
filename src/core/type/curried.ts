import { F } from 'ts-toolbelt';

type Curried<Fn extends F.Function> = F.Curry<Fn>;

export default Curried;
