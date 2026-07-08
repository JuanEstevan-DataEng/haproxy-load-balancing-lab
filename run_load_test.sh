#!/bin/bash
# Script to run JMeter load test using Docker

# Ensure we are in the project root
cd "$(dirname "$0")"

echo "🚀 Starting Load Test using Docker..."
echo "⚠️ IMPORTANT: Ensure 'minikube tunnel' is running in a separate terminal and kept open!"

# Run JMeter container attached to the host network to access minikube services
docker run --rm \
  --network host \
  -v "$(pwd):/tests" \
  justb4/jmeter \
  -n \
  -t /tests/load_test.jmx \
  -l /tests/results.jtl

echo "✅ Test completed! Results saved to results.jtl"