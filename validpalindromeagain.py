class Solution:
    def isPalindrome(self, s: str) -> bool:
        """
        - filter out non-alphanumeric characters
        - make all letters same case
        - reverse string
        - check that all letters match along strings
        """
        clean_str = ''.join(filter(str.isalnum,s)).lower()
        clean_str_reversed = clean_str[::-1]

        for i in range(len(clean_str)):
            if clean_str[i] != clean_str_reversed[i]:
                return False
        
        return True

