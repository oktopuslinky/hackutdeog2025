#!/usr/bin/env python3
"""
Quick start script for the Drain Detection Server
"""
import subprocess
import sys
import os

def main():
    backend_dir = os.path.join(os.path.dirname(__file__), 'backend')
    if os.path.exists(backend_dir):
        os.chdir(backend_dir)
    
    port = os.getenv("PORT", "5002")
    print(f"Starting Drain Detection Server on port {port}...")
    print(f"API will be available at http://localhost:{port}")
    print(f"Try: curl http://localhost:{port}/api/health")
    print("\n" + "="*50 + "\n")
    
    try:
        subprocess.run([sys.executable, "drain_server.py"], check=True)
    except KeyboardInterrupt:
        print("\n\nServer stopped")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()

