from collections import defaultdict


class MetricsTracker:
    def __init__(self):
        self.impressions = defaultdict(int)
        self.conversions = defaultdict(int)

    def log_impression(self, variant):
        self.impressions[variant] += 1

    def log_conversion(self, variant):
        self.conversions[variant] += 1

    def get_metrics(self):
        data = {}

        for variant in self.impressions:
            impressions = self.impressions[variant]
            conversions = self.conversions[variant]

            conversion_rate = (
                conversions / impressions if impressions > 0 else 0
            )

            data[variant] = {
                "impressions": impressions,
                "conversions": conversions,
                "conversion_rate": conversion_rate
            }

        return data
