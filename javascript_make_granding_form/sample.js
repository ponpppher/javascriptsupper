$(document).ready(function(){
    function score_indicate(){
        // このような記述をすることで、subject_pointsという変数の中に
        // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
        let subject_points = [Number($('#national_language').val()),
            Number($('#english').val()),
            Number($('#mathematics').val()),
            Number($('#science').val()),
            Number($('#society').val())
        ];

        // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
//        let sum = subject_points[0];
//        sum = sum + subject_points[1];
//        sum = sum + subject_points[2];
//        sum = sum + subject_points[3];
//        sum = sum + subject_points[4];
        let sum = subject_points.reduce(function(prevalue,currentvalue){
            return prevalue + currentvalue;
        });

        $("#sum_indicate").text(sum);

        // ここに、上記を参考にして平均点を出力する処理を書き込む
        $("#avarage_indicate").text(sum/subject_points.length)
    };

    function get_achievement(){
        // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
        let subject_points = [Number($('#national_language').val()),
            Number($('#english').val()),
            Number($('#mathematics').val()),
            Number($('#science').val()),
            Number($('#society').val())
        ];
        let total = function(subject_points){
            let sum = 0;
            subject_points.forEach(function(elm){
                sum += elm;
            });
            return sum;
        }
        let total_ave = total(subject_points)/subject_points.length;
        let rank=['A','B','C','D'];
        const judge_range=[80,60,40];
        switch(true) {
            case total_ave >= judge_range[0]:
                ave_rank = rank[0];
                break;
            case total_ave >= judge_range[1]:
                ave_rank = rank[1];
                break;
            case total_ave >= judge_range[2]:
                ave_rank = rank[2];
                break;
            default:
                ave_rank = rank[3];
                break;
        }
        $("#evaluation").text(ave_rank);
        return ave_rank;
    }

    function get_pass_or_failure(){
        // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
        const pass = "合格";
        const un_pass = "不合格";
        let subject_points = [Number($('#national_language').val()),
            Number($('#english').val()),
            Number($('#mathematics').val()),
            Number($('#science').val()),
            Number($('#society').val())
        ];

        let result = subject_points.some(function(value){
            return value < 60
        });

        if (result){
            $("#judge").text(un_pass);
            return "不合格";
        }else{
            $("#judge").text(pass);
            return "合格";
        }
    }

    function judgement(){
        // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
        // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
//        let elNew = document.createElement(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${get_achievement()}です。${get_pass_or_failure()}です</label>`);
        $('#alert-indicate').remove();
        $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${get_achievement()}です。${get_pass_or_failure()}です</label>`);
        //$('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${get_achievement()}です。${get_pass_or_failure()}です</label>`);
    };

    $('#national_language, #english, #mathematics, #science, #society').change(function() {
        score_indicate();
    });

    $('#btn-evaluation').click(function() {
        get_achievement();
    });

    $('#btn-judge').click(function() {
        get_pass_or_failure();
    });

    $('#btn-declaration').click(function() {
        judgement();
    });
});