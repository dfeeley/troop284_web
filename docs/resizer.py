import argparse
import pathlib
from rich import print
import subprocess
import time


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("-s", "--source", default=".")
    parser.add_argument("-d", "--dest", default="sized")
    parser.add_argument("-w", "--width", type=int, default=400)
    parser.add_argument("-i", "--interval", type=int, default=4)
    return parser.parse_args()


def main():
    ret = 0
    args = parse_args()
    src = pathlib.Path(args.source).resolve()
    dest = pathlib.Path(args.dest).resolve()

    while True:
        for file in src.glob("*.png"):
            new_name = f"{file.stem}-{args.width}{file.suffix}"
            new_path = dest / new_name
            if not new_path.exists():
                print(f"resizing {file.name} to {new_path}")
                subprocess.run(
                    ["convert", "-resize", f"{args.width}x", str(file), str(new_path)]
                )
        time.sleep(args.interval)
    return ret


if __name__ == "__main__":
    raise SystemExit(main())
