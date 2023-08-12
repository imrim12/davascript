import { Keyword } from "@vietscript/shared";
import { Parser } from "@parser/parser";

export class ThisExpression {
  type = "ThisExpression";

  constructor(parser: Parser) {
    parser.eat(Keyword.THIS);
  }
}
