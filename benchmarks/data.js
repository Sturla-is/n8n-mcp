window.BENCHMARK_DATA = {
  "lastUpdate": 1758896570244,
  "repoUrl": "https://github.com/Sturla-is/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "481d74c2491268eabf095bd0100b62fdb18309ea",
          "message": "Merge pull request #231 from czlonkowski/feat/telemetry-system-clean\n\nfeat: Add anonymous telemetry system with Supabase integration",
          "timestamp": "2025-09-26T15:25:09+02:00",
          "tree_id": "6082369645b9fc4c6c8a9984b5b23813d51599e3",
          "url": "https://github.com/Sturla-is/n8n-mcp/commit/481d74c2491268eabf095bd0100b62fdb18309ea"
        },
        "date": 1758896569606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0202,
            "range": "0.4499",
            "unit": "ms",
            "extra": "49483 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.4037,
            "range": "2.7167000000000003",
            "unit": "ms",
            "extra": "294 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0049,
            "range": "0.2822",
            "unit": "ms",
            "extra": "202028 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0676,
            "range": "0.3595",
            "unit": "ms",
            "extra": "14791 ops/sec"
          }
        ]
      }
    ]
  }
}