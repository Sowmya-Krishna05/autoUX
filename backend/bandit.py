import numpy as np
from collections import defaultdict
from app.config import VARIANTS


class ThompsonSamplingBandit:
    def __init__(self):
        # Beta distribution parameters
        self.alpha = defaultdict(lambda: 1)
        self.beta = defaultdict(lambda: 1)

        # Disabled variants (for rollback)
        self.disabled_variants = set()

    def choose_variant(self):
        samples = {}

        for variant in VARIANTS:
            if variant in self.disabled_variants:
                continue

            samples[variant] = np.random.beta(
                self.alpha[variant],
                self.beta[variant]
            )

        if not samples:
            # Fallback if all variants disabled
            return VARIANTS[0]

        return max(samples, key=samples.get)

    def update(self, variant, reward):
        if reward == 1:
            self.alpha[variant] += 1
        else:
            self.beta[variant] += 1

    def disable_variant(self, variant):
        self.disabled_variants.add(variant)

    def get_stats(self):
        stats = {}
        for variant in VARIANTS:
            total = self.alpha[variant] + self.beta[variant]
            mean = self.alpha[variant] / total

            stats[variant] = {
                "alpha": self.alpha[variant],
                "beta": self.beta[variant],
                "mean_estimate": mean
            }

        return stats
