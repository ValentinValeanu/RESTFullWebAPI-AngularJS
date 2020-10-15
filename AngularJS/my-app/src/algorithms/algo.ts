export class Algo 
{
    pattern_matching(str : string, pattern : string) : boolean
    {
        str = str.toLowerCase();
        pattern = pattern.toLowerCase();

        for (var i = 0; i < str.length && i + pattern.length <= str.length; i++) {

            let diff = 0;

            for (var j = 0; j < pattern.length; j++)
                if (str[i + j] != pattern[j]) {
                    
                    diff++; 
                }

            if (diff <= 1) return true;
        }

        return false;
    } 
}