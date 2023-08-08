class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        """
        - loop through the list once
        - keep track of the lowest price seen as you loop
        - find the difference between the lowest price and current price
        - track the greatest difference found greater than 0
        """

        min_price = prices[0]
        max_profit = 0

        for i in range(1,len(prices)):
            max_profit = max(max_profit, prices[i] - min_price)
            min_price = min(min_price, prices[i])

        return max_profit
