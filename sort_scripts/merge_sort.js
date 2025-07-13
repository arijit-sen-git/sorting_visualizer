function Merge() {
    c_delay = 0;

    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";
    document.getElementById("Space_Worst").innerText = "O(N)";

    merge_partition(0, array_size - 1);
    enable_buttons();
}

function merge_sort(start, mid, end) {
    var i, t, p = start, q = mid + 1, Arr = [], k = 0;

    for(i = start; i <= end; i++) {

        if (p > mid) {
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1],div_sizes[q - 1], "red");
        }

        else if (q > end) {
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "red");
        }

        else if (div_sizes[p] < div_sizes[q]) {
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "red");
        }

        else {
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1],"red");
        }
    }

    for (t = 0; t < k; t++) {
        div_sizes[start++] = Arr[t];
        div_update(divs[start - 1], div_sizes[start - 1], "green");
    }
}

function merge_partition(start, end) {
    var mid;

    if (start < end) {
        mid = start + Math.floor((end - start) / 2);

        div_update(divs[mid], div_sizes[mid], "yellow");
        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge_sort(start, mid, end);
    }
}