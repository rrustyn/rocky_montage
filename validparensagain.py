class Solution:
    def isValid(self, s: str) -> bool:
        """
        - walk through string, logging open parentheses
        - when a closing parentheses is found, check what the last seen open parentheses was
        - if they match, keep moving through
        - if they don't match, string is invalid
        """

        OPEN_PARENS = ["[","{","("]
        MATCHING_PARENS = {"[" : "]" , "{" : "}","(" : ")"}

        stack = []

        for i in range(len(s)):
            if s[i] in OPEN_PARENS:
                stack.append(s[i])
            else:
                if not stack:
                    return False
                if MATCHING_PARENS[stack[-1]] == s[i]:
                    stack.pop(-1)
                else:
                    return False

        return not stack
            
