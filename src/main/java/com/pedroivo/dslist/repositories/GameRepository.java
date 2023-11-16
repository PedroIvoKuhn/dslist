package com.pedroivo.dslist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pedroivo.dslist.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}