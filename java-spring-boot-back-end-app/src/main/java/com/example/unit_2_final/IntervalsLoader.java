package com.example.unit_2_final;


import com.example.unit_2_final.models.Interval;
import com.example.unit_2_final.repositories.IntervalRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class IntervalsLoader {

    @Bean
    public CommandLineRunner loadIntervals(IntervalRepository intervalRepository) {
        return args -> {
            intervalRepository.deleteAll();
            if (intervalRepository.findAll().isEmpty()) {

                Interval unison = new Interval(0, "Unison", "/assets/images/intervals/unison.webp", null);
                Interval minorSecond = new Interval(1, "Minor Second", "/assets/images/intervals/minor-second.webp", null);
                Interval majorSecond = new Interval(2, "Major Second", "/assets/images/interval s/major-second.webp", null);
                Interval minorThird = new Interval(3, "Minor Third", "/assets/images/intervals/minor-third.webp", null);
                Interval majorThird = new Interval(4, "Major Third", "/assets/images/intervals/major-third.webp", null);
                Interval perfectFourth = new Interval(5, "Perfect Fourth", "/assets/images/intervals/perfect-fourth.webp", null);
                Interval tritone = new Interval(6, "Tritone", "/assets/images/intervals/tritone.webp", null);
                Interval perfectFifth = new Interval(7, "Perfect Fifth", "/assets/images/intervals/perfect-fifth.webp", null);
                Interval minorSixth = new Interval(8, "Minor Sixth", "/assets/images/intervals/minor-sixth.webp", null);
                Interval majorSixth = new Interval(9, "Major Sixth", "/assets/images/intervals/major-sixth.webp", null);
                Interval minorSeventh = new Interval(10, "Minor Seventh", "/assets/images/intervals/minor-seventh.webp", null);
                Interval majorSeventh = new Interval(11, "Major Seventh", "/assets/images/intervals/major-seventh.webp", null);
                Interval octave = new Interval(12, "Octave", "/assets/images/intervals/octave.webp", null);

                intervalRepository.save(unison);
                intervalRepository.save(minorSecond);
                intervalRepository.save(majorSecond);
                intervalRepository.save(minorThird);
                intervalRepository.save(majorThird);
                intervalRepository.save(perfectFourth);
                intervalRepository.save(tritone);
                intervalRepository.save(perfectFifth);
                intervalRepository.save(minorSixth);
                intervalRepository.save(majorSixth);
                intervalRepository.save(minorSeventh);
                intervalRepository.save(majorSeventh);
                intervalRepository.save(octave);
            }
        };
    }

}
