import { it, expect, describe } from "vitest";
import { countingSheepsAndWolves } from "./app.js";

describe('countingSheepsAndWolves', () => {
    it('there is 17 true, and some false, should return 17 sheeps', () => {
        
        const list = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ];
        const result = countingSheepsAndWolves(list);
        expect(result).toBe("There are 17 sheep in total");
    })
    it('there is not true, return wolves eaten sheeps', () => {
    const list = [ false, false, false ];
    const result = countingSheepsAndWolves(list);
    expect(result).toBe("UPS!!! Wolfs eaten Sheeps")
    })
})