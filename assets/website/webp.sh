for f in $(ls ./*);
do
  echo "$f";
  cwebp -q 70 "$f" -o "${f%.png}.webp";
done
