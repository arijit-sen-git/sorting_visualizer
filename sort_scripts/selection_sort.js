function Selection_sort() {
    var i, j, temp;
    c_delay = 0;

    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N^2)";
    document.getElementById("Space_Worst").innerText = "O(1)";

    for(i = 0; i < array_size - 1; i++) {
        div_update(divs[i], div_sizes[i], "red");
        index_min = i;

        for (j = i + 1; j < array_size; j++) {
            div_update(divs[j], div_sizes[j], "yellow");

            if (div_sizes[j] < div_sizes[index_min]) {
                if (index_min != i)
                    div_update(divs[index_min], div_sizes[index_min], "blue");

                index_min = j;
                div_update(divs[index_min], div_sizes[index_min], "red");
            }
            else
                div_update(divs[j], div_sizes[j], "blue");
        }
        
        if (index_min != i) {
            temp = div_sizes[index_min];
            div_sizes[index_min] = div_sizes[i];
            div_sizes[i] = temp;

            div_update(divs[index_min], div_sizes[index_min], "red");
            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[index_min], div_sizes[index_min], "blue");
        }
        div_update(divs[i], div_sizes[i], "green");
    }
    div_update(divs[i], div_sizes[i], "green");
    enable_buttons();
}