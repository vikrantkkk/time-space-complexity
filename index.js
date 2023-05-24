// Find the complexicity of
let i = 0,
  j = 0,
  k = 0;
for (i = Math.floor(n / 2); i <= n; i++) {
  for (j = 2; j <= n; j = j * 2) {
    k = k + Math.floor(n / 2);
  }
}
// ans : O(nlogn)---timecomplexity
// ans :O(1)----spacecomplexity


// Find the complexicity of
let a = 0,
  i = N;
while (i > 0) {
  a += i;
  i = Math.floor(i / 2);
}
// ans : O(logn)
// ans :O(1)


// Find the complexicity of

for (var i = 0; i < n; i++) {
  i *= k;
}

// ans : O(n)
// ans :O(1)

// Find the complexicity of
let a = 0,
  b = 0;
for (i = 0; i < N; i++) {
  a = a + Math.random();
}
for (j = 0; j < M; j++) {
  b = b + Math.random();
}

// ans : O(n)
// ans : O(1)

// Find the complexicity of
let a = 0;
for (i = 0; i < N; i++) {
  for (j = N; j > i; j--) {
    a = a + i + j;
  }
}
// ans : O(n2)
// ans : O(1)