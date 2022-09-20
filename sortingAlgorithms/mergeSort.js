let delayTime;
async function mergeSort() {
  delayTime = parseInt(speed.value) / 10;
  let elementArr = [...elements.getElementsByClassName("ele")];
  let heightArr = elementArr.map((ele) =>
    parseFloat(getComputedStyle(ele).height)
  );
  await ms(heightArr, elementArr);
  for (let i = 0; i < elementArr.length; i++) {
    elementArr[
      i
    ].style.background = `linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)`;
    await delay(delayTime);
  }
}
async function ms(harr, elearr) {
  if (harr.length <= 1) {
    return { h: harr, e: elearr };
  }
  let mid = parseInt((elearr.length - 1) / 2);
  let h1 = [];
  let e1 = [];
  for (let i = 0; i <= mid; i++) {
    h1[i] = harr[i];
    e1[i] = elearr[i];
  }
  let h2 = [];
  let e2 = [];
  for (let i = mid + 1, j = 0; i < harr.length; i++, j++) {
    h2[j] = harr[i];
    e2[j] = elearr[i];
  }
  let left = await ms(h1, e1);
  let right = await ms(h2, e2);

  return await merging(left.h, left.e, right.h, right.e);
}
async function merging(h1, e1, h2, e2) {
  let height = [];
  let elemnt = [];

  let i = 0;
  let j = 0;
  let k = 0;
  for (; i < e1.length && j < e2.length; ) {
    if (h1[i] < h2[j]) {
      height[k++] = h1[i++];
    } else {
      height[k++] = h2[j++];
    }
  }
  for (; i < h1.length; ) {
    height[k++] = h1[i++];
  }
  for (; j < h2.length; ) {
    height[k++] = h2[j++];
  }
  elemnt = [...e1, ...e2];
  for (let index = 0; index < height.length; index++) {
    await delay(delayTime);
    error(elemnt[index]);
    await delay(delayTime);
    reset(elemnt[index]);
    await delay(delayTime);
    successful(elemnt[index]);
    await delay(delayTime);
    reset(elemnt[index]);
    elemnt[index].style.height = `${height[index]}px`;
  }

  return { h: height, e: elemnt };
}

function descriptionMergeSort() {
  javaButton.style.backgroundColor = `rgb(40, 44, 52)`;

  let desc = `The Merge Sort algorithm is a sorting algorithm that is based on Divide and Conqure paradigm. In this algorithm , the array is initially divided into two equal halves and then they are combined in a sorted manner. <br/><br/> <b>Merge sort working process: </b> <br><br>Think of it as a recursive algorithm continiously splits the array in half until it cannot be further divided. This means that if the array becomes empty or has only one elment left , the dividing will stop , i.e it is the base case to stop the recurssion . If the array has multiple elements , split the array into halves and recursively invoke the merge sort on each of the halves . When the 2 halves are sorted , then merge operation is applied .Merge opearation is the process of taking 2 smaller sorted arrays and combining them to eventually make a larger one.`;

  let worst = `O(NLOGN)`;
  let average = `O(NLOGN)`;
  let best = `O(NLOGN)`;
  let space = `O(N)`;

  let JavaProg = `<pre>
 <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">public</span> <span style="color:rgb(198, 120, 221); font-weight:400;">static</span> <span style="color:rgb(230, 192, 123); font-weight:400;">int</span>[] <span style="color:rgb(97, 174, 238); font-weight:400;">mergeSort</span>(<span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(230, 192, 123); font-weight:400;">int</span> arr[]</span>)</span> {
        <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (arr.length &lt;= <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>) {
            <span style="color:rgb(198, 120, 221); font-weight:400;">return</span> arr;
        }
        <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> mid = (arr.length<span style="color:rgb(209, 154, 102); font-weight:400;">-1</span>) / <span style="color:rgb(209, 154, 102); font-weight:400;">2</span>;
        <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> start = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>;
        <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> end = mid;
        <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> arr1[] = <span style="color:rgb(198, 120, 221); font-weight:400;">new</span> <span style="color:rgb(230, 192, 123); font-weight:400;">int</span>[mid - start + <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>];

        <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(230, 192, 123); font-weight:400;">int</span> i = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; i &lt;=mid; i++) {
            arr1[i] = arr[i];
        }

        start = mid + <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>;
        end = arr.length;
        <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> arr2[] = <span style="color:rgb(198, 120, 221); font-weight:400;">new</span> <span style="color:rgb(230, 192, 123); font-weight:400;">int</span>[end - start];
        <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(230, 192, 123); font-weight:400;">int</span> i = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; i &lt; arr2.length; i++) {
            arr2[i] = arr[++mid];
        }
        
        <span style="color:rgb(198, 120, 221); font-weight:400;">return</span> merging(mergeSort(arr1),mergeSort(arr2));
    }

    <span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">public</span> <span style="color:rgb(198, 120, 221); font-weight:400;">static</span> <span style="color:rgb(230, 192, 123); font-weight:400;">int</span>[] <span style="color:rgb(97, 174, 238); font-weight:400;">merging</span>(<span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(230, 192, 123); font-weight:400;">int</span> arr1[], <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> arr2[]</span>)</span> {
        <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> res[] = <span style="color:rgb(198, 120, 221); font-weight:400;">new</span> <span style="color:rgb(230, 192, 123); font-weight:400;">int</span>[arr1.length + arr2.length];
        <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> i = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>;
        <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> j = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>;
        <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> k = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>;
        <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (; i &lt; arr1.length &amp;&amp; j &lt; arr2.length;) {
            <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (arr1[i] &lt; arr2[j]) {
                res[k++] = arr1[i++];
            } <span style="color:rgb(198, 120, 221); font-weight:400;">else</span> {
                res[k++] = arr2[j++];
            }
        }
        <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (i != arr1.length) {
            <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (; i &lt; arr1.length;) {
                res[k++] = arr1[i++];
            }
        }
        <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (j != arr2.length) {
            <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (; j &lt; arr2.length;) {
                res[k++] = arr2[j++];
            }
        }
        <span style="color:rgb(198, 120, 221); font-weight:400;">return</span> res;
    }
</code></pre>`;

  let JavaScriptProg = `<pre>
 <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">function</span> <span style="color:rgb(97, 174, 238); font-weight:400;">mergeSort</span>(<span style="color:rgb(171, 178, 191); font-weight:400;">arr</span>) </span>{
  <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (arr.length &lt;= <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>) {
    <span style="color:rgb(198, 120, 221); font-weight:400;">return</span> arr;
  }
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> mid = <span style="color:rgb(230, 192, 123); font-weight:400;">parseInt</span>((arr.length - <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>) / <span style="color:rgb(209, 154, 102); font-weight:400;">2</span>);
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> start = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>;
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> end = mid;
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> arr1 = [];
  <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(198, 120, 221); font-weight:400;">let</span> i = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; i &lt;= mid; i++) {
    arr1[i] = arr[i];
  }
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> arr2 = [];
  <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(198, 120, 221); font-weight:400;">let</span> i = mid + <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>, j = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>;
  i &lt; arr.length; i++,j++) {
    arr2[j] = arr[i];
  }
  <span style="color:rgb(198, 120, 221); font-weight:400;">return</span> merging(mergeSort(arr1), mergeSort(arr2));
}
<span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">function</span> <span style="color:rgb(97, 174, 238); font-weight:400;">merging</span>(<span style="color:rgb(171, 178, 191); font-weight:400;">arr1, arr2</span>) </span>{
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> i = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>;
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> j = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>;
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> k = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>;
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> arr = [];
  <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(198, 120, 221); font-weight:400;">let</span> index = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; i &lt; arr1.length &amp;&amp; 
  j &lt; arr2.length; index++) {
    <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (arr1[i] &lt; arr2[j]) {
      arr[k++] = arr1[i++];
    } <span style="color:rgb(198, 120, 221); font-weight:400;">else</span> {
      arr[k++] = arr2[j++];
    }
  }
  <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (i != arr1.length) {
    <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(198, 120, 221); font-weight:400;">let</span> index = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; i &lt; arr1.length;
    index++) {
      arr[k++] = arr1[i++];
    }
  }
  <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (j != arr1.length) {
    <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(198, 120, 221); font-weight:400;">let</span> index = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; j &lt; arr2.length; 
    index++) {
      arr[k++] = arr2[j++];
    }
  }
  <span style="color:rgb(198, 120, 221); font-weight:400;">return</span> arr;
}</code></pre>`;

  aboutCode.innerHTML = JavaProg;
  aboutPara.innerHTML = desc;
  worstTC.innerHTML = worst;
  averageTC.innerHTML = average;
  bestTC.innerHTML = best;
  spaceC.innerHTML = space;

  javaButton.addEventListener("click", () => {
    javaButton.style.backgroundColor = `rgb(40, 44, 52)`;
    javaScriptButton.style.backgroundColor = `rgb(26 26 26)`;
    aboutCode.innerHTML = JavaProg;
  });
  javaScriptButton.addEventListener("click", () => {
    javaButton.style.backgroundColor = `rgb(26 26 26)`;
    javaScriptButton.style.backgroundColor = `rgb(40, 44, 52)`;
    aboutCode.innerHTML = JavaScriptProg;
  });
}
