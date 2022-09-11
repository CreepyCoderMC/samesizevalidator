import { valueIsSameSize } from '@teamcoder/samesizevalidator';

console.log( "Testing Condition  1 Passed = " + !valueIsSameSize( "Hallo " , "world" ) );
console.log( "Testing Condition  2 Passed = " + valueIsSameSize(  "Hallo " , "world" ) );